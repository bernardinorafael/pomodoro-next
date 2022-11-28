import { zodResolver } from "@hookform/resolvers/zod"
import Head from "next/head"
import * as Icon from "phosphor-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useCycles } from "../contexts/CyclesContext"
import {
  ButtonInterruptCountdown,
  ButtonStartCountdown,
  Container,
  Countdown,
  Separator,
} from "../css/pages/Home"

const newCycleSchema = z.object({
  task: z.string().min(1, "Informe uma tarefa."),
  duration: z.number().min(1).max(60),
})

interface InputFormNewCycle extends z.infer<typeof newCycleSchema> {}

export default function HomeScreen() {
  const [duration, setDuration] = useState<number>(0)
  const { createNewCycle, currentCycle, currentSeconds, interruptCycle } = useCycles()
  const {
    reset,
    watch,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<InputFormNewCycle>({
    resolver: zodResolver(newCycleSchema),
  })

  const minutes = String(Math.floor(currentSeconds / 60)).padStart(2, "0")
  const seconds = String(currentSeconds % 60).padStart(2, "0")

  function handleIncrementDuration() {
    if (duration >= 60) return null
    setDuration(duration + 5)
  }

  function handleDecrementDuration() {
    if (duration < 1) return null
    setDuration(duration - 5)
  }

  async function handleCreateNewCycle({ task, duration }: InputFormNewCycle) {
    await new Promise((resolve) => setTimeout(resolve, 500))

    createNewCycle(task, duration)
    setDuration(0)
    reset()
  }

  function handleInterruptCycle() {
    interruptCycle()
  }

  const task = watch("task")
  const isButtonNewCycleDisabled = !task

  return (
    <>
      <Head>
        <title>Pomodoro</title>
      </Head>

      <Container>
        <form id="countdown-form" onSubmit={handleSubmit(handleCreateNewCycle)}>
          <label htmlFor="task">Vou trabalhar em</label>

          <input
            id="task"
            type="text"
            {...register("task")}
            disabled={!!currentCycle}
            placeholder="Dê um nome ao projeto"
          />

          <label htmlFor="minutes-amount">durante</label>

          <div>
            <button disabled={!!currentCycle} onClick={handleDecrementDuration} type="button">
              <Icon.Minus weight="bold" />
            </button>

            <input
              tabIndex={-1}
              type="number"
              value={duration}
              placeholder="00"
              id="minutes-amount"
              {...register("duration", { valueAsNumber: true })}
            />

            <button disabled={!!currentCycle} type="button" onClick={handleIncrementDuration}>
              <Icon.Plus weight="bold" />
            </button>
          </div>

          <span>minutos</span>
        </form>

        <Countdown>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </Countdown>

        {!currentCycle ? (
          <ButtonStartCountdown
            type="submit"
            form="countdown-form"
            disabled={isSubmitting || isButtonNewCycleDisabled}
          >
            <Icon.Play weight="fill" size={24} />
            {isSubmitting ? "Enviando" : "Começar"}
          </ButtonStartCountdown>
        ) : (
          <ButtonInterruptCountdown type="button" onClick={handleInterruptCycle}>
            <Icon.Stop weight="fill" size={24} />
            Interromper
          </ButtonInterruptCountdown>
        )}
      </Container>
    </>
  )
}
