const debounce = <T extends unknown[]>(funcToDebounce: (...args: T) => void) => {
    let timer: ReturnType<typeof setTimeout> | undefined = undefined
    return (...args: T) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            funcToDebounce(...args);
        }, 50);
    }
}

const func = () => {
    console.log('I have been debounced');
}

const debouncedFunc = debounce(func);
debouncedFunc();
debouncedFunc();
setTimeout(debouncedFunc, 2000)