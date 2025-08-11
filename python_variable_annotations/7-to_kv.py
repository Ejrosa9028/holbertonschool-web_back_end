#!/usr/bin/env python3
"""
This module provides a function that returns a
tuple with a string and the square of a number.
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple with a string and the square of a number.

    Args:
        k (str): The string key
        v (Union[int, float]): The number to square

    Returns:
        Tuple[str, float]: A tuple containing the
        string and the square of the number
    """
    return (k, v ** 2)