import { differenceInSeconds } from "date-fns"
import { createContext, useContext, useEffect, useState } from "react"
import { v4 as uuid } from "uuid"
import { Cycle } from "../@types/cycles"

interface CyclesContextProps {
  cycles: Cycle[]
  currentCycle: Cycle
  amountSecondsPassed: number
  currentSeconds: number
  interruptCycle: () => void
  createNewCycle: (task: string, duration: number) => void
}

export const CyclesContext = createContext<CyclesContextProps | null>(null)

export function CyclesProvider({ children }: { children: React.ReactNode }) {
  const [cycles, setCycles] = useState<Cycle[]>([])

  const [currentCycleId, setCurrentCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

  const currentCycle = cycles.find((cycle) => cycle.id === currentCycleId)

  const totalSeconds = currentCycle ? currentCycle.duration * 60 : null
  const currentSeconds = currentCycle ? totalSeconds - amountSecondsPassed : null

  useEffect(() => {
    const cyclesJSON = JSON.stringify(cycles)

    localStorage.setItem("@BERNARDINO:POMODORO", cyclesJSON)
  }, [cycles])

  function interruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === currentCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      })
    )

    setCurrentCycleId(null)
  }

  function createNewCycle(task: string, duration: number) {
    const id = uuid()

    const newCycle = {
      id,
      task,
      duration,
      createdAt: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setAmountSecondsPassed(0)
    setCurrentCycleId(id)
  }

  useEffect(() => {
    let interval: NodeJS.Timer

    if (currentCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(new Date(), currentCycle.createdAt)

        if (secondsDifference >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === currentCycleId) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle
              }
            })
          )

          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [currentCycle, currentCycleId, cycles, totalSeconds])

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        currentCycle,
        interruptCycle,
        currentSeconds,
        createNewCycle,
        amountSecondsPassed,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

export function useCycles() {
  const context = useContext(CyclesContext)

  if (!context) throw new Error("useCycles must be used within a CyclesContext")

  return context
}
