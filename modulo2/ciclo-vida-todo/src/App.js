import React from 'react'
import styled from 'styled-components'

const Container= styled.ul`
  display: flex;
  width: 80%;
  height: 80vh;
  margin: 50px auto;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`
const TarefaList = styled.ul`
 display: flex;
 list-style: none;
 flex-direction: column;
 align-items: flex-end;
 width:20%;
`

const Tarefa = styled.li`
  display: flex;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
  padding: 20px;
  width: 100%;
  background-color:grey;
  margin: 10px 0;
  border-radius: 10px;
  border: 0;
  text-align: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`

const InputsContainer = styled.div`
  display: flex;

  input {
    height: 30px;
    border: 1px solid;
  }
  button {
    background-color: black;
    color:#FFFFFF;
    border: 0;
  }
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: ''
  }

  infoSave = () => {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  }

  retrieveString = () => {
    const tarefasString = localStorage.getItem("tarefas");
    const tarefasObjeto = JSON.parse(tarefasString)
    this.setState({
      tarefas: tarefasObjeto || []})
  }

  componentDidUpdate = () => {
    this.setState(this.infoSave)
  };

  componentDidMount() {
    this.retrieveString()
  };

  onChangeInput = (event) => this.setState({
    inputValue: event.target.value
  })

  criaTarefa = () => {
    const newTask = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const newStateTask = [newTask, ... this.state.tarefas]
    this.setState({ tarefas: newStateTask,
    inputValue: '' })
  }

  selectTarefa = (id) => {
    const newTask = this.state.tarefas.map((res) => {
      if (id === res.id) {
        const newStateTask = {
          ...res,
          completa: !res.completa
        }
        return newStateTask
      } else {
        return res
      }
    })
    this.setState({ tarefas: newTask })
  }

  onChangeFilter = (e) => this.setState({
    filtro: e.target.value
  })

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <Container>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </Container>
    )
  }
}

export default App