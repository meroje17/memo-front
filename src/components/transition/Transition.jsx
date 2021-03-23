import React, { useState, useEffect } from "react";
import styles from "./Transition.module.css";

const Transition = ({ launch, launchAnimation }) => {
    const [blockOne, setBlockOne] = useState(styles.blockOneInactive);
    const [blockTwo, setBlockTwo] = useState(styles.blockTwoInactive);
    const [blockThree, setBlockThree] = useState(styles.blockThreeInactive);
    const [blockFour, setBlockFour] = useState(styles.blockFourInactive);

    useEffect(() => {
        if (launch) {
            openTransition()
            const timer = setTimeout(() => {
                closeTransition()
                launchAnimation(false);
            }, 2400);
            return () => clearTimeout(timer);
        }
    }, [launch, launchAnimation])

    const openTransition = () => {
        setBlockOne(styles.blockOneActive)
        setBlockTwo(styles.blockTwoActive)
        setBlockThree(styles.blockThreeActive)
        setBlockFour(styles.blockFourActive)
    }

    const closeTransition = () => {
        setBlockOne(styles.blockOneClose)
        setBlockTwo(styles.blockTwoClose)
        setBlockThree(styles.blockThreeClose)
        setBlockFour(styles.blockFourClose)
    }

    return <div className={styles.transitionContainer}>
        <div className={blockOne} />
        <div className={blockTwo} />
        <div className={blockThree} />
        <div className={blockFour} />
    </div>
}

export default Transition;