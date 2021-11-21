import React, {Component} from 'react';
import classes from './QuizList.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";

class QuizList extends Component {

    renderQuizes() {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li
                    key={index}
                >
                    <NavLink to={'/quiz/' + quiz}>
                        Тест {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    componentDidMount() {
        axios.get('https://react-quiz-50da8-default-rtdb.europe-west1.firebasedatabase.app/quiz.json').then(response => {
            console.log(response)
        })
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>

                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default QuizList;