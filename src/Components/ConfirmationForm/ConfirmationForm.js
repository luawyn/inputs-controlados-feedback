import React from "react";
import { Form } from "../MainPage/styles";

const ConfirmationForm = (props) => {
  return (
    <Form>
      <label>
        Data de Nascimento:
        <input
          type="Date"
          value={props.birthDate}
          onChange={props.onChangeBirthDate}
        ></input>
      </label>
      <label>
        Número de telefone:
        <input
          type="Number"
          value={props.telephone}
          placeholder="(00) 00000-0000"
          onChange={props.onChangeTelephone}
        ></input>
      </label>
      <label>
        Genêro:
        <select value={props.gender} onChange={props.onChangeGender}>
          <option></option>
          <option>Homem cisgênero</option>
          <option>Mulher cisgênero</option>
          <option>Homem trans</option>
          <option>Mulher trans</option>
          <option>Pessoa não binária</option>
          <option>Prefiro não dizer</option>
        </select>
      </label>
      <label>
        Se autodeclara:
        <select value={props.race} onChange={props.onChangeRace}>
          <option></option>
          <option>Negro</option>
          <option>Branco</option>
          <option>Pardo</option>
          <option>Amarelo</option>
          <option>Indígena</option>
          <option>Prefiro não dizer</option>
        </select>
      </label>
      <div onChange={props.onChangeCourse}>
        <label>
          Curso integral web fullstack
          <input type="radio" name="curso" value="curso-integral"></input>
        </label>
        <label>
          Curso noturno web fullstack
          <input type="radio" name="curso" value="curso-noturno"></input>
        </label>
      </div>
      <label>
        Tem ensino médio completo
        <input
          type="checkbox"
          id="ensinoMedio"
          value={props.ensinoMedio}
          onChange={props.onChangeEnsinoMedio}
        ></input>
      </label>

      <label>
        Tem disponibilidade para participar das atividades
        <input
          type="checkbox"
          id="atividades"
          value={props.atividades}
          onChange={props.onChangeAtividades}
        ></input>
      </label>
      <button onClick={props.sendData2}>Enviar dados</button>
    </Form>
  );
};

export default ConfirmationForm;
