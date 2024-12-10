import { render, screen } from "@testing-library/react";
import { Posts } from ".";

const props = {
    posts: [
        {
            id: 1,
            title: 'test title-1',
            body: 'test body-1',
            cover: 'img/img-1.png'
        },
        {
            id: 2,
            title: 'test title-2',
            body: 'test body-2',
            cover: 'img/img-2.png'
        },
        {
            id: 3,
            title: 'test title-3',
            body: 'test body-3',
            cover: 'img/img-3.png'
        },
    ]
};

describe('<Posts />', () =>{
    it('Should render Posts correctly', () =>{
        render(<Posts {...props} />)

        expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
        expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
        expect(screen.getByRole('img', { name: /test title-3/i })).toHaveAttribute('src', 'img/img-3.png')
        expect(screen.getAllByText(/body/i)).toHaveLength(3);
    });
    
    it('Should match snapshot', () =>{
        const { container } = render(<Posts {...props} />);
        expect(container).toMatchSnapshot();
    });
});