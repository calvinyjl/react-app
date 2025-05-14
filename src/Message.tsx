
// PascalCasing for React components
function Message() {
    // JSX: JavaScript XML
    const name = 'Calvin';
    // In the curly braces, we can use JavaScript expressions
    if (name) {
        return <h1>Hello, {name}!</h1>
    } else {
        return <h1>Hello, World!</h1>;
    }
}

// Exporting as a default object
export default Message;