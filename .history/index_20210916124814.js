marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer();

function App() {
  
  const defaultText = `
    # H1 header
    ## H2 header

    - list item 1
    - list item 2
    - list item 3

    [Google](https://www.google.com)
  `;
  const [text, setText] = React.useState("");  
  
  return(
    <div className="text-center px-4">
      <h1 className="p-4">My Markdown Previewer</h1>
      <textarea
       className="textarea"
       name="textarea"
       id="editor"
       rows="10"
       value={text}
       onChange={(e) => setText(e.target.value)}>
      </textarea>
      <h3 className="mt-3">Output</h3>
      <Preview markdown={text} />
    </div>
  );
}

function Preview({markdown}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, {renderer: renderer}),
      }} 
      id="preview">
      
    </div>
  );
}


ReactDOM.render(<App/>, document.getElementById('root'));