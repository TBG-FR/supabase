import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import CopyButton from 'components/ui/CopyButton'
import { render } from 'tests/helpers'
import { expect, test, vi } from 'vitest'

test('shows copied text', async () => {
  const callback = vi.fn()
  render(<CopyButton text="some text" onClick={callback} />)
  userEvent.click(await screen.findByText('Copy'))
  await screen.findByText('Copied')
  expect(callback).toBeCalled()
})
