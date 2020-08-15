import Elements from '../index';

const returnCorrectElement = (elementString) => {
    if (elementString === 'var')
        elementString = 'htmlVar';
    if (Elements[elementString])
        return Elements[elementString];
    throw new Error('Element does not exist');
}

export default returnCorrectElement;