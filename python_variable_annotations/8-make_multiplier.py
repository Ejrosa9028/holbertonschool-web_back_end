#!/usr/bin/env python3
"""This module provides a function to
create a multiplier function."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Create a function that multiplies a float by a given multiplier.

    Args:
        multiplier (float): The number to multiply by.

    Returns:
        Callable[[float], float]: A function
        that takes a float and returns the product.
    """
    def multiply(n: float) -> float:
        return n * multiplier
    return multiply