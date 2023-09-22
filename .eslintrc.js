module.exports = {
    parser:  '@typescript-eslint/parser', 
    extends: ['plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    env:{                          
        browser: true,
        node: true
    }                         
}