import taskImg from '/images/lab-2/task.png';
import schemaImg from '/images/lab-2/schema-heap-sort.png';
import {Form, Formik} from "formik";
import {AppFormGroup} from "../../components/AppFormGroup";
import {AppLabel} from "../../components/AppLabel";
import {AppField} from "../../components/AppField";
import {AppButton} from "../../components/AppButton";
import {useState} from "react";
import {heapSort} from "./utils";
import {readFile} from "../../utils/uploadFile";

export const Lab2 = () => {
  const [result, setResult] = useState([]);
  const [formValue, setFormValue] = useState({ arrStr: '' })

  return (
    <div className="flex gap-10">
      <div  className="grow">
        <h1 className="text-center font-bold text-xl">Лабораторна робота № 2</h1>

        <p className="mt-2"><strong>Тема:</strong> «Обчислювальна складність алгоритмів сортування».</p>
        <p className="mt-2"><strong>Варіант №8</strong></p>

        <div className="mt-4">
          <p className="text-lg">Завдання:</p>
          <img className="mt-2" src={taskImg} alt="task"/>
        </div>
        <Formik
          enableReinitialize={true}
          initialValues={formValue}
          onSubmit={({ arrStr }) => {
            if (!arrStr) { return alert('Значення не задано.') }

            const arr = arrStr.split(' ');

            if (!arr) { return alert('Задайте значення у наступному форматі: "1 2 4 12".') }

            if (arr.find(isNaN)) { return alert('Задайте тільки числа.') }

            setResult(heapSort(arr.map(parseFloat)));
          }}
        >
          <Form className="border p-2">
            <h2 className="text-center my-2 text-xl">Задайте значення масиву через пробіл у формі:</h2>

            <AppFormGroup>
              <AppLabel htmlFor="arrStr">Значення масиву:</AppLabel>
              <AppField  className="w-full p-1" id="arrStr" name="arrStr" placeholder="1 2 3 ..." type="text" />
            </AppFormGroup>

            <AppButton className="mt-2" type="submit">Sort</AppButton>
          </Form>
        </Formik>

        <div className="mt-5">
          <input type="file" id="files" name="files[]" multiple onChange={(e) => readFile(e, setFormValue)} />
        </div>

        {
          !!result.length &&
          <div className="flex items-center flex-col mt-2">
            <h2 className="text-lg">Останнє отримане значення завдяки пірамідальному сортуванню: </h2>
            <code
              className="bg-blue-100 p-2 mt-2"
              style={{ display: 'inline-block', width: '500px', 'word-wrap': 'break-word' }}
            >
              {JSON.stringify(result)}
            </code>
          </div>
        }

        <div className="flex items-center flex-col mt-2">
          <h2 className="text-lg">Блок схема алгоритму</h2>
          <img className="mt-2" src={schemaImg} alt="schema"/>
        </div>
        <div className="text-sm mt-2">
          <p><span className="font-bold">*</span> Heapify - procedure that rearranges the elements in the array, so its tree representation is a max heap.</p>
          <p>
            <span className="font-bold">**</span> Sift down is a routine that sinks the current element to its correct place.
            This is used when we arrange our array to a correct max heap.
            In "heapify", when we find that a child is bigger than its parent we swap their places.
            In this situation it is likely that the smaller element needs to go down even further and that is exactly what "sift down" does.
          </p>
        </div>
      </div>
    </div>
  )
}
