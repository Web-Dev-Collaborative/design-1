import {defineScope} from '@sanity/ui-workshop'
import {lazy} from 'react'

export default defineScope('components/skeleton', 'Skeleton', [
  {name: 'skeleton', title: 'Skeleton', component: lazy(() => import('./skeleton'))},
  {name: 'skeleton-delay', title: 'Skeleton delay', component: lazy(() => import('./delay'))},
])
