#!/usr/bin/env python3
"""This module provides a function to get the
length of elements in an iterable."""

from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Get the length of each element in an iterable.

    Args:
        lst (Iterable[Sequence]): An iterable
        containing sequences.

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples
        containing each element and its length.
    """
    return [(i, len(i)) for i in lst]
