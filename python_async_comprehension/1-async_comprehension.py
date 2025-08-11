#!/usr/bin/env python3
"""Module for async_comprehension coroutine.
This module provides a coroutine that
collects random numbers from an async generator.
"""

from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collect 10 random numbers from async_generator using
    async comprehension and return them."""
    return [i async for i in async_generator()]
