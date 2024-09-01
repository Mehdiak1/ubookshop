

export const Block = props => {


    if(!props.state.faves)
    {
        props.state.faves = []
    }

    return <c-c style={{
        width: 150, flex: 1, minWidth: 150,
        position: "relative", backgroundColor:"white",borderRadius:10,margin:"10px"
    }}>

        <img
            className={global.styles.hover}
            src={props.book.imageLink}
            style={{ width: "100%", height: 200, objectFit: "fill",  minWidth: 150, borderTopLeftRadius:10,borderTopRightRadius:10 }}
            onClick={() => {
                props.state.form = "bookspecs"
                props.state.book = props.book
                props.refresh()
               
            }} />

        <f-cc style={{width:"100%",padding:"5px 0"}}>
            <f-15>hiiiiiiiiii</f-15>
        </f-cc>
        <hr style={{width:"80%" , opacity:0.2 , margin:"0 2px"}}/>

        <f-csb style={{width:"100%" , padding:"5px 0"}}>
            
            <img src="https://irmapserver.ir/qepal/cart.svg" style={{width:30,height:30,objectFit:"contain", margin:"0 10px"}}/>

            
            <c-x style={{direction:"ltr" , margin:"0 10px"}}>
                <f-12><del>۱۰۰۰۰ تومان</del></f-12>
                <f-15>۱۵۰۰۰ تومان</f-15>
            </c-x>
        </f-csb>

    </c-c>
}

