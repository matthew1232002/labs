import {Form, Formik} from "formik";
import {calcCircular} from "./utils";
import {AppFormGroup} from "../../components/AppFormGroup";
import {AppLabel} from "../../components/AppLabel";
import {AppField} from "../../components/AppField";
import {AppButton} from "../../components/AppButton";
import {useState} from "react";
import cycleImg from '/images/lab-1/cycle.png';
import cycleSchemaImg from "../../../images/lab-1/cycle-schema.png";

export const Circular = () => {
  const [result, setResult] = useState('...');
  return (
    <div className="flex gap-10">
      <div className="grow">
        <h2 className="text-lg">Завдання:</h2>
        <img className="mt-2" src={cycleImg} alt="circular"/>

        <Formik
          initialValues={{
            n: '',
            j: '',
            i: '',
          }}
          onSubmit={({ n, j, i }) => {
            if (!n || !j || !i) {
              return alert('Задано не валідні значення.')
            }

            if (n < 0) {
              return alert('n не може бути менше нуля.')
            }

            if (n % 1 !== 0) {
              return alert('n має бути цылим числом.')
            }

            if (j < 0 || i < 0) {
              return alert('Негативні значення не можуть бути під факторіалом.')
            }

            if (j % 1 !== 0 || i % 1 !== 0) {
              return alert('Факторіал не цілих чисел можна обчислювати за допомогою гамма-функції, проте для спрощення обрахунків тільки цілі числа вважаються валідними даними.')
            }

            setResult(calcCircular(n, j, i));
          }}
        >
          <Form className="border p-2">
            <h2 className="text-center my-2 text-xl">Задайте значення у формі</h2>
            <AppFormGroup>
              <AppLabel htmlFor="n">Значення для n:</AppLabel>
              <AppField id="n" name="n" placeholder="123..." type="number" />
            </AppFormGroup>

            <AppFormGroup className="mt-4">
              <AppLabel htmlFor="j">Значення j:</AppLabel>
              <AppField id="j" name="j" placeholder="123..." type="number" />
            </AppFormGroup>

            <AppFormGroup className="mt-4">
              <AppLabel htmlFor="i">Значення i:</AppLabel>
              <AppField id="i" name="i" placeholder="123..." type="number" />
            </AppFormGroup>

            <AppButton className="mt-2" type="submit">Submit</AppButton>
          </Form>
        </Formik>

        <p className="mt-2 text-lg">Останнє отримане значення <strong>f = {result}.</strong></p>
      </div>
      <div>
        <h2 className="text-lg">Блок схема до завдання:</h2>
        <img className="mt-2" src={cycleSchemaImg} alt="schema"/>
      </div>
    </div>
  )
}
