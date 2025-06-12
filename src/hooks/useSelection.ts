import { IUseSelectionProps, IUseSelectionReturn } from '@/types/interfaces'
import { useState } from 'react'

export function useSelection<T> ({ items, idGetter }: IUseSelectionProps<T>): IUseSelectionReturn<T> {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())

  const isSelected = (item: T): boolean => {
    const id = idGetter(item)
    return selectedIds.has(id)
  }

  const getSelectedItems = (): T[] => {
    return items.filter((item) => isSelected(item))
  }

  const areAllSelected = (): boolean => {
    return items.length > 0 && selectedIds.size === items.length
  }

  const resetSelection = (): void => {
    setSelectedIds(new Set())
  }

  const toggleItem = (item: T): void => {
    const id = idGetter(item)
    if (selectedIds.has(id)) {
      setSelectedIds(new Set(selectedIds.values().filter((selectedId) => selectedId !== id)))
    } else {
      setSelectedIds(new Set([...selectedIds.values(), id]))
    }
  }

  const toggleAll = (): void => {
    if (areAllSelected()) {
      resetSelection()
    } else {
      const allIds = items.map(idGetter)
      setSelectedIds(new Set(allIds))
    }
  }

  return {
    isSelected,
    getSelectedItems,
    areAllSelected,
    resetSelection,
    toggleItem,
    toggleAll
  }
}
