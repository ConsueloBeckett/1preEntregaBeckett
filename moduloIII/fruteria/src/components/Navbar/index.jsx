import { HStack, Spacer, Link } from "@chakra-ui/react"
import catLogo from '../../assets/backCat.jpg'
import { CardWidget } from "../CartWidget"

const Navbar = () => {
 return(
    <HStack>
        <img src={catLogo} alt="cat black" width="100px" />
        <Spacer />
     <HStack>
     <CardWidget />
        <Link>Historia</Link>
        <Link>Catalogo</Link>
        <Link>Encuentranos</Link>
     
        </HStack>
     </HStack>
 )

}

export {Navbar}