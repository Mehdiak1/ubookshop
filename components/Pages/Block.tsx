

export const Block = props => {


    if(!props.state.faves)
    {
        props.state.faves = []
    }

    return <c-c style={{
        width: 150, flex: 1, minWidth: 150,
        position: "relative"
    }}>

        <img
            className={global.styles.hover}
            src={props.book.imageLink}
            style={{ width: 150, height: 200, objectFit: "fill",  minWidth: 150 }}
            onClick={() => {
                props.state.form = "bookspecs"
                props.state.book = props.book
                props.refresh()
               
            }} />

        <f-cc>
            <f-15>hiiiiiiiiii</f-15>
        </f-cc>

        <f-csb style={{backgroundColor:"pink",width:"100%"}}>
            <f-12><sp-2/>11111<sp-2/></f-12>
            <c-x>
                <f-15></f-15>
            </c-x>
        </f-csb>

    </c-c>
}

