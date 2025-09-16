

function MyTitle(props){
    console.log(props)

    return(
        <> 
        <h1 className="text-center text-success"> {props.head} </h1>
      
        </>
    )

}

export default MyTitle