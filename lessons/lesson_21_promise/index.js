
try {
    console.log('success');
} catch (error) {
    console.log('error');
};

console.log('--------------------------------------------');

const a = undefined;

try {
    console.log('start');
    a.name = 100;
    console.log('success');
} catch (error) {
    console.log('error: ', error.message);
};

console.log('--------------------------------------------');

try {
    console.log('start');
    a.name = 100;
    console.log('success');
} catch (error) {
    console.log('error: ', error.message);
} finally {
    console.log('finally');
};

console.log('--------------------------------------------');

// throw new Error('my Error');

// --------------------------------------------------------

const errorCreator = ({name,description,type}) => {
    const error = new Error('my Error');
    error.name = name;
    error.type = description;
    error.description = type;
};

const caculate = (a, b) => {

    if (typeof a !== 'number' || typeof b !== 'number') {
        // const error = new Error('my Error');
        // error.type = 'my-error';
        // error.description = 'error description';

        // throw error;

        const error = errorCreator ({name:'error name ', description: 'error description ', type: 'error type '});
        throw error;
    }
    return a + b;
};

const res = caculate(1, 5);
console.log(res);