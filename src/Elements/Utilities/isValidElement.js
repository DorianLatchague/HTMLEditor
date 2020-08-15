import Elements from '../index';

const isValidElement = (elementString) => {
    if (elementString === 'var')
        elementString = 'htmlVar'
    return elementString in Elements;
}

export default isValidElement;