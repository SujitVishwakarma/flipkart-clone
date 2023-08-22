import { Box, ButtonGroup,Button } from "@mui/material"
import styled from "@emotion/styled"

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`
const StyledButton = styled(Button)`
    border-radius: 50%;
`
const GroupedButton = () => {
  return (
    <Component>
        <StyledButton>-</StyledButton>
        <StyledButton>1</StyledButton>
        <StyledButton>+</StyledButton> 
    </Component>
  )
}

export default GroupedButton
