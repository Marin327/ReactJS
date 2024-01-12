import { render, screen } from "@testing-library/react";
import RandomJoke from "./RandomJoke";

//moq 1
const fakeJoke = 'Chuck Norris mocled joke';

beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve({
                icon_url: 'mocked.img',
                value: fakeJoke
            })
        })
    );
})

describe('Random Joke Test Suit', () => {
    test('Show fetched joke image', async () => {
        render(<RandomJoke />);

        const image = await screen.findByRole('img');

        //assert
        expect(image).toHaveAttribute('src', 'mocked.img');
    });

    test('Show fetched joke text', async () => {
        render(<RandomJoke />);

        const image = await screen.findByText(fakeJoke);

        //assert
        expect(image).toBeInTheDocument();
    });
})