<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCP\Mail\Headers;

/**
 * Keyword values for the Auto-Submitted email header, as per RFC 3834.
 *
 * The value "auto-notified" as per RFC 5436 is deliberately omitted as it is
 * meant of notification of the sieve system.
 *
 * @link https://www.iana.org/assignments/auto-submitted-keywords/auto-submitted-keywords.xhtml
 *
 * @since 26.0.0
 */
final class AutoSubmitted {
	/**
	 * Name of the Header as used in the final message later
	 *
	 * @var string
	 * @since 26.0.0
	 */
	public const HEADER = 'Auto-Submitted';

	/**
	 * Indicates that a message was NOT automatically generated, but was
	 * created by a human (or following human interaction). It is the equivalent
	 * to the absence of an Auto-Submitted header altogether.
	 *
	 * @var string
	 * @since 26.0.0
	 */
	public const VALUE_NO = 'no';

	/**
	 * Indicates that a message was generated by an automatic process, and is
	 * not a direct response to another message
	 *
	 * @var string
	 * @since 26.0.0
	 */
	public const VALUE_AUTO_GENERATED = 'auto-generated';

	/**
	 * Indicates that a message was automatically generated as a direct response
	 * to another message.
	 *
	 * @var string
	 * @since 26.0.0
	 */
	public const VALUE_AUTO_REPLIED = 'auto-replied';
}
