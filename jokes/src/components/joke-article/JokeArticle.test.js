import { cleanup, render, screen } from '@testing-library/react'
import React from "react";
import { act } from "react-dom/test-utils";
import JokeArticle from "./JokeArticle";

function wait(time) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
    return promise;
}

afterEach(cleanup);


describe('JokeArticles.TestsSuit', () => {
    test('Joke Article Base', () => {
        const value = 'Chuck Norris something funny';
        const container = document.createElement('div');
        document.body.appendChild(container);

        //const root = ReactDOM.createRoot(container);

        // root.render(<JokeArticle text={value} />);
        // await wait(50);

        // act(() => {
        //     root.render(<JokeArticle text={value} />)
        // });

        act(() => {
            render(<JokeArticle text={value} />);
        });

        const actual = document.querySelector('.joke').textContent;
        expect(actual).toBeTruthy();
    });


    test('Joke Article Base using React Testing Library', () => {
        const value = 'Chuck Norris something funny';

        // ACT
        render(<JokeArticle text={value} />);

        // ASSERT
        expect(screen.getByText(value)).toBeInTheDocument();
    });
});

