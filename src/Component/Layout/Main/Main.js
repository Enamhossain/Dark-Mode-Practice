import Nav from '../../Shared/Nav/Nav';


const Main = ({ children }) => {
    return (
        <>
      
        
            <div className='grow'>
                <Nav  />
                <div className='m-5'>{children}</div>
            </div>
       
    </>

    
   
    );
};

export default Main;