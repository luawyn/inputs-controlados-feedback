import React, { useState } from "react";
import { MainContainer } from "./styles";
import NameForm from "../NameForm/NameForm";
import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";

const MainPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacao, setEmailConfirmacao] = useState("");
  const [formFlow, setFormFlow] = useState(1);
  const [birthDate, setBirthDate] = useState("");
  const [telephone, setTelephone] = useState("");
  const [gender, setGender] = useState("");
  const [race, setRace] = useState("");
  const [course, setCourse] = useState("");
  const [ensinoMedio, setEnsinoMedio] = useState(false);
  const [atividades, setAtividades] = useState(false);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeEmailConfirmacao = (event) => {
    setEmailConfirmacao(event.target.value);
  };

  const sendData = () => {
    if (
      age >= 18 &&
      email.length >= 10 &&
      name.length <= 30 &&
      email === emailConfirmacao
    ) {
      setFormFlow(2);
    } else {
      alert("você não pode se inscrever!");
    }
  };

  const onChangeBirthDate = (event) => {
    setBirthDate(event.target.value);
  };

  const onChangeTelephone = (event) => {
    setTelephone(event.target.value);
  };

  const onChangeGender = (event) => {
    setGender(event.target.value);
  };

  const onChangeRace = (event) => {
    setRace(event.target.value);
  };

  const onChangeCourse = (event) => {
    setCourse(event.target.value);
  };

  const onChangeEnsinoMedio = (event) => {
    setEnsinoMedio(event.target.value);
  };

  const onChangeAtividades = (event) => {
    setAtividades(event.target.value);
  };

  const sendData2 = () => {
    if (
      birthDate.length !== 10 &&
      telephone.length !== 11 &&
      gender === "" &&
      race === "" &&
      course === false &&
      ensinoMedio === false &&
      atividades === false
    ) {
      alert("Preencha tudo corretamente");
    } else {
      alert("Parabéns, sua inscrição foi aprovada!");
    }
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? (
        <NameForm
          name={name}
          age={age}
          email={email}
          emailConfirmacao={emailConfirmacao}
          onChangeName={onChangeName}
          onChangeAge={onChangeAge}
          onChangeEmail={onChangeEmail}
          onChangeEmailConfirmacao={onChangeEmailConfirmacao}
          sendData={sendData}
          setFormFlow={setFormFlow}
        />
      ) : (
        <ConfirmationForm
          birthDate={birthDate}
          onChangeBirthDate={onChangeBirthDate}
          telephone={telephone}
          onChangeTelephone={onChangeTelephone}
          gender={gender}
          onChangeGender={onChangeGender}
          race={race}
          onChangeRace={onChangeRace}
          course={course}
          onChangeCourse={onChangeCourse}
          ensinoMedio={ensinoMedio}
          onChangeEnsinoMedio={onChangeEnsinoMedio}
          atividades={atividades}
          onChangeAtividades={onChangeAtividades}
          sendData2={sendData2}
        />
      )}
    </MainContainer>
  );
};

export default MainPage;
