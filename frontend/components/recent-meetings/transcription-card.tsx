'use client'

import { StatusBadge } from '@/components/status-icon'
import { TranscriptionMetadata } from '@/lib/client'
import { Clock } from 'lucide-react'

export const TranscriptionCard = ({
  transcription,
  className,
}: {
  transcription: TranscriptionMetadata
  className?: string
}) => {
  const date = new Date(transcription.created_datetime)
  return (
    <div className={className}>
      <div className="mb-1 flex items-center gap-2 font-semibold">
        {transcription.title || 'No title'}
      </div>
      <div className="text-muted-foreground flex items-center gap-2 text-xs">
        <div className="flex items-center gap-1">
          <Clock className="size-3.5" />
          {date.toDateString()} at {date.toLocaleTimeString()}
        </div>
        <StatusBadge status={transcription.status} className="text-inherit" />
      </div>
    </div>
  )
}
