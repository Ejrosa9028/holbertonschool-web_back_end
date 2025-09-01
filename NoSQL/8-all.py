#!/usr/bin/env python3
"""
Module for listing all documents in a collection
"""


def list_all(mongo_collection):
    """
    Lists all documents in a collection
    Args:
        mongo_collection: pymongo collection object
    Returns:
        List of all documents or empty list if no documents
    """
    if mongo_collection is None:
        return []
    return list(mongo_collection.find())


if __name__ == "__main__":
    pass
