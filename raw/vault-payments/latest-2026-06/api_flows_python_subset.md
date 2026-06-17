---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/api/flows/python_subset"
title: "Python Subset"
scraped_at: "2026-06-17T05:11:04.026Z"
images: 0
---

# Python Subset

## [](#allowed_built_ins "Copy link to heading")Allowed built-ins

AssertionError, AttributeError, BaseException, Exception, NameError, StopIteration, TypeError, False, None, True, abs, all, any, bin, bool, bytearray, bytes, callable, chr, complex, dict, divmod, enumerate, filter, float, format, frozenset, hash, hex, int, isinstance, iter, len, list, map, max, min, next, oct, ord, pow, range, repr, reversed, round, set, slice, sorted, str, sum, tuple, type, zip

## [](#allowed_imports "Copy link to heading")Allowed imports

 
| Package | Imports |
| --- | --- |
| 
calendar

 | 

isleap, monthrange

 |
| 

collections

 | 

defaultdict

 |
| 

datetime

 | 

datetime, timedelta

 |
| 

dateutil.relativedelta

 | 

relativedelta

 |
| 

decimal

 | 

Decimal, ROUND\_05UP, ROUND\_CEILING, ROUND\_DOWN, ROUND\_FLOOR, ROUND\_HALF\_DOWN, ROUND\_HALF\_EVEN, ROUND\_HALF\_UP

 |
| 

json

 | 

dumps, loads

 |
| 

math

 | 

\* (All public names)

 |
| 

typing

 | 

Any, Callable, DefaultDict, Dict, Iterable, Iterator, List, Mapping, NamedTuple, NewType, NoReturn, Optional, Set, Type, Tuple, Union

 |
| 

zoneinfo

 | 

ZoneInfo

 |

## [](#disallowed_keywords "Copy link to heading")Disallowed keywords

async, await, async for, async with, class, global, nonlocal