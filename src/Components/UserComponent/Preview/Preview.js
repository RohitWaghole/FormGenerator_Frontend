

const Preview=(props)=>{


    return(
        <div>
          <h2>Preview</h2>
          {props.formConfiguration.map((field)=>{
            return (
            <div>
              <label>{field.label}</label>
              <input type={field.type} />
            </div>
            )
          })}
        </div>
    )
}

export default Preview