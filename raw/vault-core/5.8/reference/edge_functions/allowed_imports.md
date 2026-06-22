---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-8/EN/reference/edge_functions/allowed_imports"
title: "Allowed Python imports in Edge Functions"
scraped_at: "2026-06-17T15:41:10.279Z"
images: 0
---

# Allowed Python imports in Edge Functions

Edge Functions only allow you to import a subset of Python objects due to security reasons. See the following information to learn more.

## [](#allowed_python_built_in_objects "Copy link to heading")Allowed Python built-in objects

You can use the following Python built-ins in Edge Functions directly:

`AssertionError`, `AttributeError`, `EOFError`, `EnvironmentError`, `Exception`, `False`, `GeneratorExit`, `IOError`, `ImportError`, `IndexError`, `KeyError`, `ModuleNotFoundError`, `NameError`, `None`, `NotImplementedError`, `OSError`, `OverflowError`, `RecursionError`, `ReferenceError`, `RuntimeError`, `StopIteration`, `True`, `TypeError`, `UnicodeDecodeError`, `UnicodeEncodeError`, `UnicodeError`, `UnicodeTranslateError`, `ValueError`, `ZeroDivisionError`, `abs`, `all`, `any`, `bin`, `bool`, `bytearray`, `bytes`, `callable`, `chr`, `complex`, `dict`, `divmod`, `enumerate`, `filter`, `float`, `format`, `frozenset`, `hash`, `hex`, `int`, `isinstance`, `iter`, `len`, `list`, `map`, `max`, `min`, `next`, `oct`, `ord`, `pow`, `range`, `repr`, `reversed`, `round`, `set`, `slice`, `sorted`, `str`, `sum`, `tuple`, `type`, `zip`

## [](#allowed_bare_imports "Copy link to heading")Allowed bare imports

You can import the following modules without using the `from` keyword:

`edge_api`, `math`, `vc_api`

## [](#allowed_from_imports "Copy link to heading")Allowed from imports

You can import the following specific objects using the `from …​ import …​` syntax:

`calendar`

`isleap`, `monthrange`

`collections`

`defaultdict`

`datetime`

`datetime`, `timedelta`, `timezone`

`dateutil.parser`

`parse`

`dateutil.relativedelta`

`relativedelta`

`decimal`

`Decimal`, `ROUND_05UP`, `ROUND_CEILING`, `ROUND_DOWN`, `ROUND_FLOOR`, `ROUND_HALF_DOWN`, `ROUND_HALF_EVEN`, `ROUND_HALF_UP`

`edge_api`

`All public members can be imported.`

`enum`

`Enum`, `auto`

`json`

`dumps`, `loads`

`math`

`All public members can be imported.`

`typing`

`AbstractSet`, `Annotated`, `Any`, `AnyStr`, `AsyncContextManager`, `AsyncGenerator`, `AsyncIterable`, `AsyncIterator`, `Awaitable`, `BinaryIO`, `ByteString`, `Callable`, `ChainMap`, `ClassVar`, `Collection`, `Concatenate`, `Container`, `ContextManager`, `Coroutine`, `Counter`, `DefaultDict`, `Deque`, `Dict`, `Final`, `ForwardRef`, `FrozenSet`, `Generator`, `Generic`, `Hashable`, `IO`, `ItemsView`, `Iterable`, `Iterator`, `KeysView`, `List`, `Literal`, `Mapping`, `MappingView`, `Match`, `MutableMapping`, `MutableSequence`, `MutableSet`, `NamedTuple`, `NewType`, `NoReturn`, `Optional`, `OrderedDict`, `ParamSpec`, `ParamSpecArgs`, `ParamSpecKwargs`, `Pattern`, `Protocol`, `Reversible`, `Sequence`, `Set`, `Sized`, `SupportsAbs`, `SupportsBytes`, `SupportsComplex`, `SupportsFloat`, `SupportsIndex`, `SupportsInt`, `SupportsRound`, `TYPE_CHECKING`, `Text`, `TextIO`, `Tuple`, `Type`, `TypeAlias`, `TypeGuard`, `TypeVar`, `TypedDict`, `Union`, `ValuesView`, `cast`, `final`, `get_args`, `get_origin`, `get_type_hints`, `is_typeddict`, `no_type_check`, `no_type_check_decorator`, `overload`, `runtime_checkable`

`uuid`

`NAMESPACE_DNS`, `NAMESPACE_OID`, `NAMESPACE_URL`, `NAMESPACE_X500`, `RESERVED_FUTURE`, `RESERVED_MICROSOFT`, `RESERVED_NCS`, `RFC_4122`, `SafeUUID`, `UUID`, `getnode`, `uuid1`, `uuid3`, `uuid4`, `uuid5`

`vc_api`

`All public members can be imported.`

`zoneinfo`

`ZoneInfo`