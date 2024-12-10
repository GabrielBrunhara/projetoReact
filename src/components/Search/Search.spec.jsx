import { fireEvent, render, screen } from "@testing-library/react";
import { Search } from ".";
import userEvent from "@testing-library/user-event";


describe('<Search />', () => {
    it('Should render Search correctly', () => {
        const fn = jest.fn();
        render(<Search placeholder='Test search' value='Test something' onChange={fn} />);
        
        const search = screen.getByPlaceholderText('Test search');
        
        expect(search).toBeInTheDocument();
        expect(search.value).toBe('Test something');
    });
    
    it('Should change placeholder on focus and on blur', () => {
        render(<Search placeholder='Test search' onFocus='Test type something...' />);
        
        const search = screen.getByPlaceholderText('Test search');
        
        fireEvent.focus(search);
        expect(search.placeholder).toBe('Test type something...');
        
        fireEvent.blur(search);
        expect(search.placeholder).toBe('Test search');
        
    });
    
    it('Should call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        render(<Search placeholder='Test search' onChange={fn} />);
        
        const search = screen.getByPlaceholderText('Test search');
        const value = 'test input search';
        
        userEvent.type(search, value);
        
        expect(search.value).toBe(value);
        expect(fn).toHaveBeenCalledTimes(value.length);
    });
    
    
    
    it('Should match snapshot', () =>{
        const fn = jest.fn();
        const { container } = render(<Search placeholder='Test search' value='Test something' onChange={fn} onFocus='Test type something...' />);
        expect(container).toMatchSnapshot();
    });
});