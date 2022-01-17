import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
const InputComentarioButton = styled.button`
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		valueString: '',
		
	}

	onChangeComentario = (e) => {
		this.setState({valueString: e.target.value})
		console.log(this.state.valueString)
	}
	
	render() {
		
		return (
		
			<CommentContainer>
				<InputComentario
					placeholder={'Comentário'}
					value={this.state.valueString}
					onChange={this.onChangeComentario}
				/>
				<InputComentarioButton onClick={this.props.aoEnviar}>Enviar</InputComentarioButton>
			</CommentContainer>
		)
	}
}
