
class debounceUtility {

    static timeout : ReturnType<typeof setTimeout>;

    static debounceStringCallback(stringValue: string, delay: number,callback: (value: string) => void ) {        
        
        clearTimeout(debounceUtility.timeout)
        debounceUtility.timeout = setTimeout(() => {
            callback(stringValue);
        }, delay);        
    }
   
}

export default debounceUtility;