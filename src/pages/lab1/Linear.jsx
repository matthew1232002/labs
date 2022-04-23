import { Formik, Field, Form } from 'formik';
import {useState} from "react";
import {calcLinear} from "./utils";
import {AppField} from "../../components/AppField";
import {AppButton} from "../../components/AppButton";
import {AppFormGroup} from "../../components/AppFormGroup";
import {AppLabel} from "../../components/AppLabel";
import linearImg from '/images/lab-1/linear.png';
import linearSchemaImg from '/images/lab-1/linear-schema.png';

export const Linear = () => {
  const [result, setResult] = useState('...');

  return (
    <div className="flex gap-10">
      <div className="grow">
        <p className="text-lg">Завдання:</p>
        <img className="mt-2" src={linearImg} alt="linear"/>
        <Formik
          initialValues={{
            b: '',
            c: '',
          }}
          onSubmit={({ b, c }) => {
            if(!b || !c) {
              return alert('Задано не валідні значення')
            }

            if(b < 0 || c < 0) {
              return alert('b та c мають бути більшими за нуль')
            }

            setResult(calcLinear(b, c));
          }}
        >
          <Form className="border p-2">
            <h2 className="text-center my-2 text-xl">Задайте значення у формі</h2>
            <AppFormGroup>
              <AppLabel htmlFor="b">Значення для b:</AppLabel>
              <AppField id="b" name="b" placeholder="123..." type="number" />
            </AppFormGroup>

            <AppFormGroup className="mt-4">
              <AppLabel htmlFor="c">Значення для c:</AppLabel>
              <AppField id="c" name="c" placeholder="123..." type="number" />
            </AppFormGroup>

            <AppButton className="mt-2" type="submit">Submit</AppButton>
          </Form>
        </Formik>

        <p className="mt-2 text-lg">Останнє отримане значення <strong>Y1 = {result}.</strong></p>
      </div>

      <div>
        <h2 className="text-lg">Блок схема до завдання:</h2>
        <img className="mt-2" src={linearSchemaImg} alt="schema"/>
      </div>
    </div>
  )
}
