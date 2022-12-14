import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Option from '../Option/Option';
import './Questions.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Questions = ({ questions }) => {
    const { question, correctAnswer } = questions
    // console.log(questions.options)

    const rightAnswer = () => {
        // alert(`Right Answer: ${correctAnswer}`)
        toast.success(`Right Answer: ${correctAnswer}`, {
            position: toast.POSITION.TOP_RIGHT
        })
    }
    return (
        <div className='question-container'>
            <div className='question'>
                <h6>{question.slice(3, -4)}</h6>
                <div>
                    <button onClick={rightAnswer}><FontAwesomeIcon icon={faEye} style={{ marginLeft: 20 }}></FontAwesomeIcon></button>
                    <ToastContainer autoClose={1700} pauseOnHover={false} />
                </div>
            </div>
            <div className='options-container'>
                {
                    questions.options.map(option => <Option
                        key={option}
                        option={option}
                        right={correctAnswer}
                    ></Option>)
                }

            </div>
        </div>
    );
};

export default Questions;