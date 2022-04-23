import {Form, Formik} from "formik";
import {calcBranched, calcLinear} from "./utils";
import {AppFormGroup} from "../../components/AppFormGroup";
import {AppLabel} from "../../components/AppLabel";
import {AppField} from "../../components/AppField";
import {AppButton} from "../../components/AppButton";
import {useState} from "react";
import branchingImg from '/images/lab-1/branching.png';
import branchingSchemaImg from "../../../images/lab-1/branching-schema.png";
import {readFile} from "../../utils/uploadFile";

export const Branched = () => {
  const [result, setResult] = useState('...');
  const [formValues, setFormValues] = useState({
    x: '',
    a: '',
    b: '',
  });

  const uploadFile = (event) => {
    const fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      if (e.currentTarget.result) {
        const values =  JSON.parse(e.currentTarget.result);
        setFormValues(values);
      }
    };
    fileReader.readAsText(event.target.files[0]);
  }

  return (
    <div className="flex gap-10">
      <div className="grow">
        <p className="text-lg">Завдання:</p>
        <img className="mt-2" src={branchingImg} alt="branched"/>

        <Formik
          enableReinitialize={true}
          initialValues={formValues}
          onSubmit={({ x, a, b }) => {
            if(!b || !a || !x) {
              return alert('Задано не валідні значення')
            }
            setResult(calcBranched(x, a, b));
          }}
        >
          <Form className="border p-2">
            <h2 className="text-center my-2 text-xl">Задайте значення у формі</h2>
            <AppFormGroup>
              <AppLabel htmlFor="x">Значення для x:</AppLabel>
              <AppField id="x" name="x" placeholder="123..." type="number" />
            </AppFormGroup>

            <AppFormGroup className="mt-4">
              <AppLabel htmlFor="a">Значення a:</AppLabel>
              <AppField id="a" name="a" placeholder="123..." type="number" />
            </AppFormGroup>

            <AppFormGroup className="mt-4">
              <AppLabel htmlFor="b">Значення b:</AppLabel>
              <AppField id="b" name="b" placeholder="123..." type="number" />
            </AppFormGroup>

            <AppButton className="mt-2" type="submit">Submit</AppButton>
          </Form>
        </Formik>
        <div className="mt-5">
          <input type="file" id="files" name="files[]" multiple onChange={(e) => readFile(e, setFormValues)} />
        </div>

        <p className="mt-2 text-lg">Останнє отримане значення <strong>y = {result}.</strong></p>
      </div>


      <div>
        <h2 className="text-lg">Блок схема до завдання:</h2>
        <img className="mt-2" src={branchingSchemaImg} alt="schema"/>
      </div>
    </div>
  )
}
