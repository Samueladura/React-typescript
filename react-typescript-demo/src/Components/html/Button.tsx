type ButtonProps = {
    varient: 'primary' | 'secondary'
    childern: string
} & Omit<React.ComponentProps<'button'>, 'children'> 

export const CustomButton = ({ varient, childern, ...rest }: ButtonProps) => {
    return (
        <button className={`class-with-${varient}`} {...rest}>
            {childern}
        </button>
    )
}
