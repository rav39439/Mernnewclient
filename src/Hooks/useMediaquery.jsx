import React from 'react'


const useMediaquery=(query)=> {
  const [matches, setMatches] = React.useState(false);
  React.useEffect(() => {
    const matchQueryList = window.matchMedia(query);
    function handleChange(e) {
      setMatches(e.matches);
    }
    matchQueryList.addEventListener("change", handleChange);
    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);
    
      return matches
    }
    
export default useMediaquery
    ///const matches = useMediaQuery('(min-width: 768px)')


    // export default function Component() {
    //     const matches = useMediaQuery('(min-width: 768px)')
      
    //     return (
    //       <div>
    //         {`The view port is ${matches ? 'at least' : 'less than'} 768 pixels wide`}
    //       </div>
    //     )
