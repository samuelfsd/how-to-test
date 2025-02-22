import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import { Button } from "../../components/button";

describe('Test button successfully', () => {
    it('should be render a button component', () => {
        const btnText ="Label 1"
        const onClickFn = vitest.fn()

        render(<Button onClick={onClickFn}>{btnText}</Button>)
        const btnElement = screen.getByRole('button', {name: btnText})

        expect(btnElement).toBeDefined()
    })

    it('should be a call click function button', () => {
        const btnText ="Label 2"
        const onClickFn = vitest.fn()

        render(<Button  onClick={onClickFn}>{btnText}</Button>)
        const btnElement = screen.getByRole('button', {name: btnText})

        fireEvent.click(btnElement);
        expect(onClickFn).toHaveBeenCalledTimes(1);
    })
})