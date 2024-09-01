

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

        <f-cc style={{width:"100%",padding:"5px 0"}}>
            <f-15>hiiiiiiiiii</f-15>
        </f-cc>

        <f-csb style={{width:"100%" , padding:"5px 0"}}>
            
            <img src="https://irmapserver.ir/qepal/cart.svg" style={{width:30,height:30,objectFit:"contain"}}/>

            
            <c-x style={{direction:"ltr" , margin:"0 5px"}}>
                <f-12><del>۱۰۰۰۰ تومان</del></f-12>
                <f-15>۱۵۰۰۰ تومان</f-15>
            </c-x>
        </f-csb>

    </c-c>
}

