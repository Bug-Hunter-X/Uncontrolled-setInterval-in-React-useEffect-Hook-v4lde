# Uncontrolled setInterval in React useEffect Hook
This repository demonstrates a common error in React applications involving the `useEffect` hook and `setInterval`. The issue arises when `setInterval` is used within `useEffect` without proper cleanup, leading to uncontrolled intervals and potential memory leaks.

## Problem
The provided code snippet shows an incorrect implementation where `setInterval` is set up to increment a counter every second. Because the dependency array is empty ([]), it is only called once during the component's mount and never cleared, leading to memory leaks as the interval continues to run even after the component unmounts. This will make the counter continuously increase and is an inefficient use of resources. 

## Solution
The solution involves adding a cleanup function to the useEffect hook. The cleanup function is executed before the component unmounts and should use `clearInterval` to stop the interval.

## How to reproduce
Clone this repository and run `npm start`. Observe the counter. You will see the counter continuously increase, and the uncontrolled increment will only stop if you manually interrupt the program.

## How to fix
Review the `bugSolution.js` file for a corrected implementation.  The solution demonstrates how to correctly clear the interval using `clearInterval` in the cleanup function.