import axios from "axios";
import React, { useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function FormSubmitHandler (props) {
    const API_PATH = './sendmail.php';
    const formInputsValue = {
        name: '',
        email: '',
        phone: ''
    }
    const [formData, setFormData] = useState(formInputsValue);

    const MySwal = withReactContent(Swal);

    const handleChange = (event) => {
       setFormData({...formData, [event.target.name]: event.target.value});
       console.log(formData);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: formData
        })
          .then(result => {
            console.log('send!');
            console.log(formData);
            MySwal.fire({
              title: <p>Успешно отправлено!</p>,
              footer: 'Скоро с Вами свяжутся!',
            })
          })
          .catch(error => {
            console.log('error!');
            console.log(formData);
            MySwal.fire({
              title: <p>Извините, заявка не отправлена!</p>,
              footer: 'Попробуйте ещё раз'
            })
          });
      };

    return (
        <>
            {React.cloneElement(props.children, {
                onChange: handleChange.bind(this),
                onSubmit: handleFormSubmit.bind(this)
            })}
        </>
    )
}

export default FormSubmitHandler;