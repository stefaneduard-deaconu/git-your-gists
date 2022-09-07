import styles from './LoadingSpinner.module.css'
import spinnerImg from './LoadingSpinner.svg'

export type PropTypes = {
    size: number // number of pixels used for width/height
}

const LoadingSpinner = ({size}: PropTypes) => {
    return (
        <img
            className={`${styles.spinner} ${styles.loading}`}
            src={spinnerImg} width={`${size}px`} height={`${size}px`}
            alt={'At The Moment, The Gists Are Loading'}
        />
    )
}

export default LoadingSpinner;