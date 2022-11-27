import Head from "next/head"
import * as Icon from "phosphor-react"
import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { useCycles } from "../contexts/CyclesContext"
import { Container, HistoryList, Status } from "../css/pages/History"

export default function History() {
  const { cycles } = useCycles()

  return (
    <>
      <Head>
        <title>Histórico | Pomodoro</title>
      </Head>

      <Container>
        <h1>Meu histórico</h1>

        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {cycles.map((cycle) => {
                return (
                  <tr key={cycle.id}>
                    <td width="50%">{cycle.task}</td>
                    <td>{cycle.duration} minutos</td>
                    <td>
                      {formatDistanceToNow(new Date(cycle.createdAt), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </td>
                    <td>
                      {cycle.finishedDate && (
                        <Status status="concluded">
                          <Icon.CircleWavy weight="fill" size={12} />
                          Concluído
                        </Status>
                      )}

                      {cycle.interruptedDate && (
                        <Status status="interrupted">
                          <Icon.CircleWavy weight="fill" size={12} />
                          Interrompido
                        </Status>
                      )}

                      {!cycle.interruptedDate && !cycle.finishedDate && (
                        <Status status="progress">
                          <Icon.CircleWavy weight="fill" size={12} />
                          Em andamento
                        </Status>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </HistoryList>
      </Container>
    </>
  )
}
