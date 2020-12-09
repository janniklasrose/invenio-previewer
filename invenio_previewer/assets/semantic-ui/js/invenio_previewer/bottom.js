/*
 * This file is part of Invenio.
 * Copyright (C) 2015-2020 CERN.
 *
 * Invenio is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

$(".ui.button.embed-btn").click(function () {
  $("#embedModal").modal("show");
});

$("#close-btn").click(function () {
  $("#embedModal").modal("hide");
});