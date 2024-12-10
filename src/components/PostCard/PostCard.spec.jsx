import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock

describe('<PostCard />', () =>{
    it('Should render PostCard correctly', () =>{
        //const {debug} = render(<PostCard {...mock} />);
        //debug();

        render(<PostCard {...props} />);

        expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.cover);
        //expect(screen.getByRole('heading', {name: `Id: ${props.id}` })).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: props.title })).toBeInTheDocument();
        expect(screen.getByText(props.body)).toBeInTheDocument();
    });
    
    it('Should match snapshot', () =>{
        const { container } = render(<PostCard {...props} />);
        expect(container).toMatchSnapshot();
    });
});